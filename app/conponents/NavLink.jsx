import Link from "next/link";

const NavLink = ({ href, title}) => (
  <Link
    href={href}
    className='block py-2 px-4 rounded md:p-0 transition-colors duration-200
                text-gray-200 hover:text-white font-semibold text-base tracking-wide'
  >
    {title}
  </Link>
);

export default NavLink;

