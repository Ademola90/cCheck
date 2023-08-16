const HomeThreeServiceCard = ({ icon }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="text-center tw-w-64 mx-auto tw-p-4 tw-rounded-lg tw-bg-white shadow"
    >
      <img
        src={require(`../../Assets/${icon}`)}
        alt="service icon"
        className="tw-h-20 mx-auto tw-mb-10"
      />
      <p className="tw-font-bold tw-text-lg">Service</p>
      <p className="tw-text-xs tw-font-light">
        Lorem ipsum dolor sit amet consectetur. Arcu ultrices sagittis facilisi
        leo velit libero interdum. Et lacus euismod elit in rutrum. Nibh morbi
        tincidunt enim tempus tortor quam lectus ac. Diam.
      </p>
    </div>
  );
};
export default HomeThreeServiceCard;
