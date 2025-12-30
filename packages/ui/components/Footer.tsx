import React, { forwardRef } from 'react';
import { Box } from './Box';
import { Container } from './Container';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'simple' | 'columns' | 'centered';
  containerSize?: "1" | "2" | "3" | "4";
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ 
    children, 
    variant = 'simple', 
    containerSize = "4",
    className = "", 
    ...props 
  }, ref) => {
    const classNames = [
      'az-Footer',
      `az-${variant}`,
      className,
    ].filter(Boolean).join(' ');

    return (
      <Box as="footer" className={classNames} ref={ref} {...props}>
        <Container size={containerSize} className="az-Footer-container">
          {children}
        </Container>
      </Box>
    );
  }
);

const FooterBrand = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`az-Footer-brand ${className}`} {...props}>
    {children}
  </div>
);

const FooterContent = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`az-Footer-content ${className}`} {...props}>
    {children}
  </div>
);

const FooterLinks = ({ title, children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement> & { title?: string }) => (
  <div className={`az-Footer-links ${className}`} {...props}>
    {title && <div className="az-Footer-links-title">{title}</div>}
    {children}
  </div>
);

const FooterLink = ({ href, children, className = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} className={`az-Footer-link ${className}`} {...props}>
    {children}
  </a>
);

const FooterBottom = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`az-Footer-bottom ${className}`} {...props}>
    {children}
  </div>
);

const FooterSocial = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`az-Footer-social ${className}`} {...props}>
    {children}
  </div>
);

// Dot notation assignments
const FooterRoot = Footer as typeof Footer & {
  Brand: typeof FooterBrand;
  Content: typeof FooterContent;
  Links: typeof FooterLinks;
  Link: typeof FooterLink;
  Bottom: typeof FooterBottom;
  Social: typeof FooterSocial;
};

FooterRoot.Brand = FooterBrand;
FooterRoot.Content = FooterContent;
FooterRoot.Links = FooterLinks;
FooterRoot.Link = FooterLink;
FooterRoot.Bottom = FooterBottom;
FooterRoot.Social = FooterSocial;

export { 
  FooterRoot as Footer,
  FooterBrand,
  FooterContent,
  FooterLinks,
  FooterLink,
  FooterBottom,
  FooterSocial
};

export default FooterRoot;
