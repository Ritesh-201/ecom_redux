const HamburgerIcon = ({ color = '#2d3748', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="hamburger-icon">
    <path d="M4 6H20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 12H20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 18H20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default HamburgerIcon;
