const Marquee = ({ children }) => {
    return (
      <div className="overflow-hidden text-end">
        <div className="marquee animate-marquee text-3xl font-bold italic">{children}</div>
      </div>
    );
};
  
export default Marquee;
