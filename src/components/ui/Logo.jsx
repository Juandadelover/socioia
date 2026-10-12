// Logotipo SocioIA: glifo </> + palabra con "IA" en cian.
const Logo = ({ className, showTagline = false, title = 'SocioIA' }) => (
  <svg
    className={className}
    viewBox={showTagline ? '0 0 210 52' : '0 0 168 36'}
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="var(--cyan)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 9 3 18l8 9" />
      <path d="M29 9l8 9-8 9" />
      <path d="M23.5 7 16.5 29" />
    </g>
    <text
      x="46"
      y="27"
      fontFamily="'Bricolage Grotesque Variable', system-ui, sans-serif"
      fontWeight="800"
      fontSize="25"
      letterSpacing="-0.5"
      fill="var(--text)"
    >
      SOCIO<tspan fill="var(--cyan)">IA</tspan>
    </text>
    {showTagline && (
      <text
        x="47"
        y="46"
        fontFamily="'Hanken Grotesk Variable', system-ui, sans-serif"
        fontWeight="500"
        fontSize="10.5"
        fill="var(--text-3)"
      >
        Tecnología que trabaja por ti
      </text>
    )}
  </svg>
);

export default Logo;
