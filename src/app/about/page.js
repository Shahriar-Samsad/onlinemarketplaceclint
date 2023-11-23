import Link from "next/link";
import Layout from "../customLayout/layout";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-2   items-center place-content-center gap-6">
          <div>
            <h1 className="text-5xl font-bold my-5">History</h1>
            <span className="block w-28 h-1 bg-black mb-5"></span>
            <p className="text-xl justify-end">
              Our mother company is Chapai Agro Product Marketing Co.Ltd The
              Leading Provider of Premium Mango Pulp for the Beverage Industry
              in Bangladesh!
            </p><br></br>
            <p className=" justify-end">
            <h1 className="text-xl">MISSION</h1>
Chapai Agro. believes in serving the people and the country; not only in doing business and making profit.
Chapai Agro believes that no organization can grow without an able and dedicated workforce behind it.
It values and nurtures its officials, employees and other members of the staff accordingly.
Through various acts and measures, the group tries to create a sense of belonging among the workforce so that they explore their full potential and give full dedication to the organization and get evaluated accordingly. 
As a business conglomerate, Chapai Agro does not want to grow alone; it wishes to grow together with its partners, patrons, customers, employees and other stakeholders.
<br></br>
<br></br>
<h1 className="text-xl">VISION</h1>
It wishes to go far ahead from where it is now.
The group wants to be a trustworthy business house of the country and contributor, from the private sector, to economic and social development.
It also wishes to bring more and more people under job and thus become the largest employer in the private sector.
            </p>

          </div>
          <div>
            <img src="/gopalvog2.jpg" alt="loading..." />
            <a
              href="https://chapaiagro.com"
              target="_blank"
              className="text-3xl underline hover:text-red-400 mt-5 font-bold flex">
              See Details
            </a>
          </div> 
        </div>
      </div>
    </Layout>
  );
};

export default Home;
