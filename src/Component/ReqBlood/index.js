import Footer from "../Footer";
import Navbar from "../Navbar";
import "./ReqBlood.css";

export default function ReqBlood() {
  return (
    <>
      <Navbar />
      <div className="Request">
        <section>
          <h2>
            <span>Request</span> for <span>Blood</span>
          </h2>
        </section>
        <section className="ReqData">
          <form>
            <input type="text" placeholder="Patient Name" />
            <input type="text" placeholder="Attendee Name" />
            <input type="text" placeholder="+91 | Mobile Number" />
            <input type="date" value="Date of Birth" />
            <input type="text" placeholder="Blood Group" />
            <input type="text" placeholder="Quantity" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="PIN" />
            <section>
              <label for="note">Additional note for Donors</label>
              <textarea id="note" name="note"></textarea>
            </section>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
