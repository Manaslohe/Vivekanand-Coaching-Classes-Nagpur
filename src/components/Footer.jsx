function Footer() {
  return (
    <footer className="bg-[#0b1233] px-4 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/logo.png"
            alt="Vivekanand Coaching Classes logo"
            className="h-10 w-24 rounded-lg bg-white px-2 py-1 object-contain"
          />
          <strong>Vivekanand Coaching Classes</strong>
        </div>
      </div>
    </footer>
  )
}

export default Footer
