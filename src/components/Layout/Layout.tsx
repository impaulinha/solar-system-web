interface LayoutProps {
  roulette: React.ReactNode
  info: React.ReactNode
  scene: React.ReactNode
}

export function Layout({ roulette, info, scene }: LayoutProps) {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-space-900 md:grid md:grid-cols-[38%_62%] lg:grid lg:grid-cols-[10%_38%_52%]">
      <div className="stars-sm" aria-hidden="true" />
      <div className="stars-md" aria-hidden="true" />
      <div className="stars-lg" aria-hidden="true" />

      <aside
        className="
          relative z-10
          order-3 flex items-center justify-center
          border-t border-surface-700
          md:order-2 md:col-start-2 md:row-start-2 md:border-t md:border-l-0
          lg:order-1 lg:col-start-1 lg:row-start-1 lg:border-t-0 lg:border-r lg:border-surface-700
        "
      >
        {roulette}
      </aside>

      <main
        className="
          relative z-10
          order-2 flex flex-col justify-end px-6 py-8
          md:order-1 md:col-start-1 md:row-span-2 md:justify-center md:px-10 md:py-16
          lg:order-2 lg:col-start-2 lg:row-span-1 lg:px-12
        "
      >
        {info}
      </main>

      <section
        className="
          relative z-10
          order-1 flex min-h-[45dvh] items-center justify-center
          md:order-3 md:col-start-2 md:row-start-1 md:min-h-0
          lg:order-3 lg:col-start-3
        "
      >
        {scene}
      </section>
    </div>
  )
}
