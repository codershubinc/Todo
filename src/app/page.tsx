'use client';
import { useUser } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()

  if (!user) {
    return (
      <div>
        <p>You are not signed in</p>
      </div>
    )
  }
  console.log("user found", user);



  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
    >
      home
    </div>
  );
}
