import Image from "next/image"

interface StockIconProps {
  domain: string
  name: string
  size?: number
}

export function StockIcon({ domain, name, size = 32 }: StockIconProps) {
  const iconUrl = `https://logo.clearbit.com/${domain}`

  return (
    <div className="relative overflow-hidden rounded-full" style={{ width: size, height: size }}>
      <Image
        src={iconUrl || "/placeholder.svg"}
        alt={`${name} logo`}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  )
}

