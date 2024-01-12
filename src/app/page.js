import Link from 'next/link'

export default function Intro() {
  return (
    <main className="flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl">Quizzical</h1>
      <p className="mt-2 mb-7">Math Quiz Game</p>

      <Link href="/questions">
        <button className="btn btn--lg">
          Start Quiz
        </button>
      </Link>
    </main>
  )
}
