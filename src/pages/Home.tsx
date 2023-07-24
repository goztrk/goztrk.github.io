import Typewriter from 'typewriter-effect';

export function Home() {
  const typewriterOptions = {
    strings: ['Software Engineer', 'Full Stack Developer', 'Loving father and husband'],
    autoStart: true,
    loop: true,
  };
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <h1 className="text-5xl">
        Gokhan<span className="font-monospace text-red-600">.is()</span>
      </h1>
      <h2 className="text-3xl">
        a{' '}
        <span className="text-red-600">
          `<Typewriter component="span" options={typewriterOptions} />`
        </span>
      </h2>
    </main>
  );
}
