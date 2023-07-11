import Image from 'next/image';

function HomeFooter() {
  return (
    <div
      id="social media section"
      className="items-center hidden h-20 gap-3 p-4 text-white sm:flex bg-sky-700">
      <span>مرا دنبال کن:</span>
      <a target="_blank" href="https://github.com/omidneshati">
        <Image src="/icons/github-mark-white.svg" alt="github" width="30" height="30" />
      </a>
      <a target="_blank" href="https://twitter.com/omid_neshati">
        <Image src="/icons/twitter.svg" alt="twitter" width="35" height="35" />
      </a>
    </div>
  );
}

export default HomeFooter;
