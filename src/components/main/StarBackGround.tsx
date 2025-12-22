'use client'
import React, {useMemo, useRef, Suspense, memo, useState, useEffect} from 'react'
import {  Canvas, useFrame} from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from 'next-themes';

const Sun = memo(({ scrollProgress }: { scrollProgress: number }) => {
    const sunRef = useRef<any>();
    const raysRef = useRef<any>();
    const groupRef = useRef<any>();
    const [animationProgress, setAnimationProgress] = useState(0);

    useEffect(() => {
        // Animación de aparición gradual
        let frame = 0;
        const animate = () => {
            frame++;
            const progress = Math.min(frame / 60, 1); // 60 frames = ~1 segundo
            setAnimationProgress(progress);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, []);

    useFrame((state) => {
        if (sunRef.current) {
            // Animación sutil de pulsación
            const scale = 1.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.075;
            sunRef.current.scale.set(scale, scale, scale);
        }
        if (raysRef.current) {
            // Rotación muy lenta de los rayos
            raysRef.current.rotation.z += 0.001;
        }

        // Animación de aparición suave desde abajo (amanecer)
        if (groupRef.current) {
            const easeProgress = animationProgress * animationProgress * (3 - 2 * animationProgress); // smoothstep
            groupRef.current.scale.setScalar(easeProgress);
        }
    });

    // Calcular posición del sol basada en el scroll
    // Empieza bien a la izquierda (-1.2) y termina a la derecha (1.0)
    const sunX = -1.2 + (scrollProgress * 2.2);
    // Arco vertical más pronunciado para simular el recorrido del sol
    const sunY = 0.2 + Math.sin(scrollProgress * Math.PI) * 0.5;

    return (
        <group ref={groupRef} position={[sunX, sunY, -0.5]}>
            {/* Sol principal */}
            <mesh ref={sunRef}>
                <circleGeometry args={[0.12 * 1.5, 32]} />
                <meshBasicMaterial color="#f59e0b" opacity={0.85} transparent />
            </mesh>

            {/* Resplandor del sol */}
            <mesh>
                <circleGeometry args={[0.18 * 1.5, 32]} />
                <meshBasicMaterial color="#fde68a" opacity={0.4} transparent />
            </mesh>

            {/* Resplandor exterior más sutil */}
            <mesh>
                <circleGeometry args={[0.25 * 1.5, 32]} />
                <meshBasicMaterial color="#fef3c7" opacity={0.2} transparent />
            </mesh>

            {/* Rayos sutiles del sol */}
            <group ref={raysRef}>
                {[...Array(12)].map((_, i) => (
                    <mesh
                        key={i}
                        rotation={[0, 0, (Math.PI * 2 * i) / 12]}
                        position={[Math.cos((Math.PI * 2 * i) / 12) * 0.18 * 1.5, Math.sin((Math.PI * 2 * i) / 12) * 0.18 * 1.5, 0]}
                    >
                        <planeGeometry args={[0.015 * 1.5, 0.09 * 1.5]} />
                        <meshBasicMaterial color="#fbbf24" opacity={0.6} transparent />
                    </mesh>
                ))}
            </group>
        </group>
    );
});

Sun.displayName = 'Sun';

const StarBackGround = memo((props:any) => {
    const ref:any=useRef();
    const { theme } = useTheme();
    const { scrollProgress } = props;

    // Memoize sphere generation - reduced from 5000 to 2000 particles for better performance
    const sphere = useMemo(()=>random.inSphere(new Float32Array(2000), {radius:1.2}), []);

    // Change star color and animation based on theme
    const starColor = theme === 'light' ? '#fbbf24' : '#fff';
    const starOpacity = theme === 'light' ? 0.25 : 1;
    const starSize = theme === 'light' ? 0.002 : 0.003;

    // Different animation for light mode - más suave y elegante
    useFrame((state, delta:any)=>{
        if (ref.current) {
            if (theme === 'light') {
                // Animación flotante suave para light mode
                ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
                ref.current.rotation.y += delta / 20;
                ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.08) * 0.03;
            } else {
                // Animación original para dark mode
                ref.current.rotation.x -= delta / 10;
                ref.current.rotation.y -= delta / 15;
            }
        }
    })

  return (
    <>
        <group rotation={[0,0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color={starColor}
                    size={starSize}
                    sizeAttenuation
                    depthWrite={false}
                    opacity={starOpacity}
                />
            </Points>
        </group>
        {theme === 'light' && (
            <Sun scrollProgress={scrollProgress} />
        )}
    </>
  )
})

StarBackGround.displayName = 'StarBackGround';

const StartCanvas = memo(()=>{
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = Math.min(scrolled / documentHeight, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-full h-auto fixed inset-0 z-[20] pointer-events-none'>
            <Canvas
                camera={{position:[0,0,1]}}
                dpr={[1, 2]} // Limit pixel ratio for better performance
                performance={{ min: 0.5 }} // Allow quality reduction on slower devices
                gl={{
                    antialias: false, // Disable antialiasing for better performance
                    powerPreference: "high-performance"
                }}
            >
                <Suspense fallback={null}>
                    <StarBackGround scrollProgress={scrollProgress} />
                </Suspense>
            </Canvas>
        </div>
    );
})

StartCanvas.displayName = 'StartCanvas';

export default StartCanvas;
