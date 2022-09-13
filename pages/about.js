import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className="text-Thblack top-36 absolute w-full bg-Thblack">
        <div className="flex">
          <div className="w-1/2 text-center ">
            <h2 className="">Contact</h2>
            <form action="">
              <input
                type="text"
                className="border-2 border-black rounded-md my-2"
              />
              <label htmlFor=""></label>
              <br />
              <input
                type="text"
                className="border-2 border-black rounded-md my-2"
              />
              <label htmlFor=""></label>
              <br />
              <input
                type="text"
                className="border-2 border-black rounded-md my-2"
              />
              <label htmlFor=""></label>
              <br />
              <button className="border-2 border-black rounded-md shadow-md bg-Thred text-Thwhite px-2">
                Send
              </button>
            </form>
          </div>
          <div className="w-1/2 text-center  border-l-2 border-black">
            <h2 className="">Store Info</h2>
            <p className="bold inline-block">Phone: </p>
            <p className="bold inline-block">123-456-1234</p>
            <br />
            <p className="bold inline-block">Address: </p>
            <p className="bold inline-block">123 Fuck Ave.</p>

            <div className="box w-2/3 h-60 bg-Thred justify-center mx-auto my-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <h1>About Us</h1>
      <div className="flex justify-center mx-auto">
        <div className="Contact">
          <h2>Contact</h2>
        </div>
        <div className="Visit">
          <h2>Visit Us In Person!</h2>
        </div>
        <div className="gallery">
          <h2>Meet the Family!</h2>
        </div>
      </div>

      <h1 className={styles.h1}>About Us</h1>
      <div className="justify-center text-center absolute top-32 px-5 text-lg bold w-1/2 h-1/2">
        <h2 className={styles.h2}>Contact</h2>
        <p className="font-extrabold text-xl pt-2 pl-6">Phone:</p>
        <p className="bold text-lg text-left px-8 ">682-445-1275</p>
        <p className="font-extrabold text-xl pt-2 pl-6">Send us a Message:</p>
         Insert Form 

       <p className="font-extrabold text-xl pt-2 pl-6">Store Hours: </p>
        <div>
          <div className="text-left float-left pl-16 ">
            Monday: <br />
            Tuesday: <br />
            Wednesday: <br />
            Thursday: <br />
            Friday: <br />
            Saturday: <br />
            Sunday:
          </div>
          <div className="text-right float-right pr-16 ">
            9am-5pm <br />
            9am-5pm <br />
            9am-5pm <br />
            9am-5pm <br />
            9am-5pm <br />
            9am-3pm <br />
            Closed <br />
          </div>
        </div>
      </div>

      <div className="justify-center text-center absolute top-32 right-0 px-5 text-lg bold w-1/2 h-1/2">
        <h2 className={styles.h2}>Visit us today</h2>
        <p className="font-extrabold text-xl py-2">Address: </p>
        <p className="pb-4 px-8">
          4000 Oak Lane, Suite 129 <br />
          Arlington, TX 76018
        </p>
        <div className="border-2 border-black h-[300px] w-[300px] mx-auto">
          Insert sc of google maps pg that links to google maps address */
}
