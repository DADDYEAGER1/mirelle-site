import Link from 'next/link';

interface NextPageButtonProps {
  href: string;
}

export default function NextPageButton({ href }: NextPageButtonProps) {
  return (
    <div className="py-12 flex justify-center">
      <Link
        href={href}
        className="group px-12 py-4 border-2 border-[#252220] bg-white hover:bg-[#252220] text-[#252220] hover:text-white transition-all duration-300 font-medium tracking-wide"
        className="font-ui"
      >
        <span className="text-sm uppercase">NEXT</span>
      </Link>
    </div>
  );
}