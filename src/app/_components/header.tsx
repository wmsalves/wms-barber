import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const Header = () => {
  return (
    <Card>
      <CardContent>
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
      </CardContent>
    </Card>
  )
}

export default Header
