import { partnersList } from "~/lib/utils/data";

const Partners = () => {
  return (
    <section>
      <div className="flex space-x-10">
        {partnersList.map((partner) => (
          <div key={partner.id}>
            <img src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
