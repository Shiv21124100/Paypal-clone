import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="max-w-6xl mx-auto px-8">
        <ul className="text-slate-700 font-bold flex flex-col items-center justify-start gap-4 md:flex-row">
          <li>Help and Contact</li>
          <li>Fees</li>
          <li>Security</li>
          <li>Features</li>
          <li>Shop</li>
          <li>Feedback</li>
        </ul>

        <br />
        <hr />
        <br />

        <div className="md:flex md:items-center md:justify-between">
          <ul className="text-slate-700 flex flex-col items-center justify-start gap-4 md:flex-row">
            <li>About</li>
            <li>Newsroom</li>
            <li>Jobs</li>
            <li>Developers</li>
            <li>Partners</li>
          </ul>

          <br />

          <ul className="text-slate-700 flex flex-col items-center justify-start gap-4 md:flex-row">
            <li>&copy; 1999 - 2024</li>
            <li>Accessibility</li>
            <li>Privacy</li>
            <li>Legal</li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm my-6">
        PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.

When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn mor
        </p>
      </footer>
    </>
  );
}
