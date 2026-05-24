export function CartoucheCard({ children, className = '', style = {} }) {
  return (
    <div className={`relative ${className}`} style={style}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,8 Q150,0 250,8 C252,28 296,30 296,50 Q305,100 296,150 C296,170 252,172 250,192 Q150,200 50,192 C48,172 4,170 4,150 Q-5,100 4,50 C4,30 48,28 50,8Z"
          fill="rgba(245,237,223,0.96)"
        />
        <path
          d="M50,8 Q150,0 250,8 C252,28 296,30 296,50 Q305,100 296,150 C296,170 252,172 250,192 Q150,200 50,192 C48,172 4,170 4,150 Q-5,100 4,50 C4,30 48,28 50,8Z"
          fill="none"
          stroke="rgba(200,169,106,0.75)"
          strokeWidth="1.8"
        />
        <path
          d="M57,15 Q150,8 243,15 C245,32 288,34 288,54 Q296,100 288,146 C288,166 245,168 243,185 Q150,192 57,185 C55,168 12,166 12,146 Q4,100 12,54 C12,34 55,32 57,15Z"
          fill="none"
          stroke="rgba(200,169,106,0.42)"
          strokeWidth="0.7"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
