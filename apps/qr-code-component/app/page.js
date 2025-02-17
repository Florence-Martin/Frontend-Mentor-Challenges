import Image from "next/image";
export default function Home() {
    return (<div className="container">
      <div className="card">
        <div className="card-top">
          <Image src="/images/image-qr-code.png" alt="QR code" width={320} height={320} className="w-80 rounded-2xl"/>
        </div>
        <div className="card-body">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>);
}
