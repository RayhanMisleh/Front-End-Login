import { Warp } from "@paper-design/shaders-react"
import LoginForm from "../components/login-form"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background shader */}
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(340, 100%, 20%)", "hsl(320, 100%, 75%)", "hsl(350, 90%, 30%)", "hsl(330, 100%, 80%)"]}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-white text-6xl md:text-7xl font-sans font-light italic">Welcome Back</h1>

          {/* Login form (client component) */}
          <LoginForm />

          {/* Description text */}
          <p className="text-white/90 text-lg font-sans font-light leading-relaxed">
            Sign in to your account to continue. If you don't have an account yet, you can create one later.
          </p>
        </div>
      </div>
    </main>
  )
}
