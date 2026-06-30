import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      background: "#800020",
      color: "white"
    }}>

      <h2>BankingSolutions</h2>

      <div style={{
        display: "flex",
        gap: "20px"
      }}>

        <Link href="/">Home</Link>

        <Link href="/courses">Courses</Link>

        <Link href="/bsps">BSPS</Link>

        <Link href="/mock-tests">Mock Tests</Link>

        <Link href="/current-affairs">Current Affairs</Link>

        <Link href="/login">Login</Link>

      </div>

    </nav>
  )
}