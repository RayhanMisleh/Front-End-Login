"use client"

import React, { useState } from "react"

type ApiResult = {
  valida: boolean
  erros: string[]
  confirmacao?: string
}

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors([])
    setSuccess(null)

    const fd = new FormData(e.currentTarget)
    const email = String(fd.get("email") || "").trim()
    const password = String(fd.get("password") || "")

    if (!email || !password) {
      setErrors(["Email e senha são obrigatórios"])
      return
    }

    setLoading(true)
    try {
      const base = (process.env.NEXT_PUBLIC_VALIDATOR_URL ?? "http://localhost:3001").replace(/\/$/, "")
      const endpoint = `${base}/validar-senha`

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senha: password }),
      })

      if (res.status === 400) {
        const json = await res.json()
        setErrors(json.erros || ["Requisição inválida"])
        return
      }

      const json: ApiResult = await res.json()
      if (!json.valida) {
        setErrors(json.erros || ["Senha inválida"])
        return
      }

      // Senha validada com sucesso — aqui você pode continuar com login real
      setSuccess(json.confirmacao || "Senha válida — pronto para autenticar")
      // Simulação: log
      console.log("Login attempt", { email, password })
    } catch (err) {
      console.error(err)
      setErrors(["Erro de rede ao validar senha"])
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-4" action="#" onSubmit={handleSubmit}>
      <div>
        {/* feedback */}
        <div aria-live="polite">
          {errors.length > 0 && (
            <div className="mb-2 text-sm text-red-200 bg-red-900/30 rounded-md p-3">
              <strong className="block font-semibold">Problemas encontrados:</strong>
              <ul className="mt-1 list-disc list-inside">
                {errors.map((er, i) => (
                  <li key={i}>{er}</li>
                ))}
              </ul>
            </div>
          )}

          {success && (
            <div className="mb-2 text-sm text-green-900 bg-green-200/20 rounded-md p-3">{success}</div>
          )}
        </div>
      </div>

      <div className="relative">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={loading}
          className="w-full px-6 py-4 pr-20 text-lg bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 disabled:opacity-50"
        />
      </div>

      <div className="relative">
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
          disabled={loading}
          className="w-full px-6 py-4 pr-20 text-lg bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 disabled:opacity-50"
        />
        <button
          type="submit"
          aria-label="Sign in"
          disabled={loading}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group disabled:opacity-50"
        >
          {loading ? (
            <svg className="animate-spin w-5 h-5 text-gray-800" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-800 group-hover:translate-x-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-white/80">
          <input type="checkbox" className="accent-white" disabled={loading} />
          Remember me
        </label>
        <a href="#" className="text-white/70 hover:underline">
          Forgot password?
        </a>
      </div>
    </form>
  )
}
