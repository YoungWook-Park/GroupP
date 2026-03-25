type WelcomeBannerProps = {
  title?: string
  subtitle?: string
}

export function WelcomeBanner({
  title = '협업 연습',
  subtitle = '브랜치·PR·코드 리뷰를 연습할 수 있는 React + Vite 템플릿입니다.',
}: WelcomeBannerProps) {
  return (
    <header className="welcome-banner">
      <p className="welcome-banner__eyebrow">Cooperation</p>
      <h2 className="welcome-banner__title">{title}</h2>
      <p className="welcome-banner__subtitle">{subtitle}</p>
    </header>
  )
}
