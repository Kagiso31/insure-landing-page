import { socialLinks, footerLinks } from "../constants";
import { logo, patterns } from "../constants/assets";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 bg-neutral-gray-very-light bg-[url('./assets/images/bg-pattern-footer-mobile.svg')] md:bg-[url('./assets/images/bg-pattern-footer-desktop.svg')] bg-left-top bg-no-repeat">
      {/* top */}
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-8 pb-9 border-b-[1px] border-b-neutral-grayish-violet-dark">
          <div>{logo}</div>
          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href={link.link}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* bottom */}
      <nav className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-11 pt-9">
        {footerLinks.map((footerLink) => {
          return (
            <div
              className="flex-1 text-center sm:text-left"
              key={footerLink.id}
            >
              <h4 className="font-bold text-neutral-grayish-violet-dark uppercase mb-10">
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li className="mb-5" key={link.id}>
                    <a
                      className="font-bold text-primary-violet-dark uppercase underline transition-colors ease-in-out delay-100 decoration-neutral-gray-very-light hover:decoration-neutral-violet-very-dark"
                      href={link.link}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
