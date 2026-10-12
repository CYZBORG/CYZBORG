import type { ReactNode } from "react";

const UPDATED = "October 12, 2026";
const CONTACT = "contact@cyzborg.com";

function Mail({subject}:{subject?:string}){return <a href={`mailto:${CONTACT}${subject?`?subject=${encodeURIComponent(subject)}`:""}`}>{CONTACT}</a>;}

function LegalPage({title,children}:{title:string;children:ReactNode}){
  return <main className="legal-page">
    <header className="legal-header"><div className="shell"><a className="brand" href="/" aria-label="CYZBORG home"><img className="helmet" src="/helmet.svg" alt=""/><img className="wordmark" src="/wordmark-tight.svg" alt="CYZBORG"/></a></div></header>
    <article className="shell legal-body">
      <p className="eyebrow">LEGAL</p>
      <h1>{title}</h1>
      <p className="legal-updated">Last updated {UPDATED}</p>
      {children}
    </article>
    <footer className="legal-footer"><div className="shell"><nav aria-label="Legal"><a href="/">Home</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a></nav><p>© 2026 CYZBORG LLC · New Mexico, USA</p></div></footer>
  </main>;
}

export function Privacy(){
  return <LegalPage title="Privacy Policy">
    <p>This policy explains what information CYZBORG LLC (“CYZBORG,” “we,” “us”) collects through cyzborg.com, why, and what you can do about it. Short version: we collect very little, we don’t sell it, and we don’t use advertising or analytics trackers.</p>

    <h2>What we collect</h2>
    <ul>
      <li><strong>Your email address</strong>, if you sign up for first access. We use it to send news about CYZBORG apparel drops, music, and content.</li>
      <li><strong>Ideas you send us</strong> through “Share your input,” plus your email if you choose to include it so we can reply.</li>
      <li><strong>Shirt votes.</strong> When you vote, we create a random ID so you can’t vote twice and so your votes show when you come back. The ID isn’t linked to your name or email.</li>
      <li><strong>A scrambled (hashed) version of your IP address</strong>, stored briefly to stop spam and abuse. We don’t keep your actual IP address.</li>
    </ul>
    <p>We don’t collect payment information. There is nothing to buy on the site yet.</p>

    <h2>Cookies</h2>
    <p>We use one functional cookie, <code>cyzborg_input</code>. It is set only when you vote or send an idea, it holds the random ID described above, and it expires after one year. The site owner’s sign-in uses a separate cookie that only affects the owner dashboard. We don’t use advertising, analytics, or tracking cookies, so there is no cookie banner to accept.</p>
    <p>Music players are provided by Spotify and load only when you press Play. After that, Spotify’s own <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noreferrer">privacy policy</a> and cookies apply to the player.</p>

    <h2>Who we share it with</h2>
    <p>We do not sell or rent your personal information, and we don’t share it for targeted advertising. We use a few service providers that handle data for us under their own security and privacy terms:</p>
    <ul>
      <li><strong>Netlify</strong> hosts the site and stores signups, votes, and ideas.</li>
      <li><strong>An email service provider</strong> will send our emails once we start sending them. It may only use your address to deliver CYZBORG emails.</li>
    </ul>
    <p>We may also disclose information if the law requires it.</p>
    <p>Links to TikTok, Instagram, YouTube, X, Facebook, Spotify, and Apple Music take you to those services, which have their own privacy policies.</p>

    <h2>How long we keep it</h2>
    <p>We keep your email until you unsubscribe or ask us to delete it. We keep ideas until we’ve reviewed them and no longer need them. Anti-spam records are short-lived.</p>

    <h2>Your choices and rights</h2>
    <ul>
      <li><strong>Unsubscribe</strong> at any time using the link in any CYZBORG email, or by emailing <Mail subject="Unsubscribe"/>.</li>
      <li><strong>Access, correct, or delete your data.</strong> Email <Mail subject="Data request"/> with the address you used. We’ll respond within 30 days and delete your signup and any ideas sent with that email.</li>
      <li>Because we don’t track you, Global Privacy Control and “Do Not Track” signals are honored by default.</li>
    </ul>

    <h2>Children</h2>
    <p>CYZBORG is not directed at children under 13, and some of our music has explicit language. We don’t knowingly collect information from children under 13. If you believe a child has sent us information, email <Mail subject="Child data request"/> and we’ll delete it.</p>

    <h2>Security</h2>
    <p>Data is sent over encrypted connections (HTTPS), and access to signups and ideas is limited to the site owner. No system is perfectly secure, but we keep what we collect to a minimum.</p>

    <h2>Changes</h2>
    <p>If this policy changes, we’ll update the date at the top. We’ll update it before we start selling products or using any new service that handles your data.</p>

    <h2>Contact</h2>
    <p>CYZBORG LLC, New Mexico, USA · <Mail/></p>
  </LegalPage>;
}

export function Terms(){
  return <LegalPage title="Terms of Use">
    <p>These terms apply to your use of cyzborg.com, which is operated by CYZBORG LLC, a New Mexico limited liability company. By using the site, you agree to them.</p>

    <h2>Concept previews, not products for sale</h2>
    <p>Apparel shown on this site is a <strong>concept mockup</strong>. Nothing here is an offer to sell, and voting or signing up doesn’t create any order or commitment. Designs, colors, fabrics, sizing, prices, and launch dates are targets and may change. When products go on sale, separate terms of sale, shipping, and refund policies will apply and will be posted before checkout.</p>

    <h2>Our content</h2>
    <p>CYZBORG™, the CYZBORG helmet and Z marks, our designs, music, artwork, videos, and site content belong to CYZBORG LLC or its licensors. You’re welcome to share links and to stream our music on the platforms where it’s published. Don’t copy, resell, or use our marks or designs commercially without written permission.</p>

    <h2>Ideas you send us</h2>
    <p>We love hearing ideas. If you send one, you agree we may use it to develop CYZBORG products, music, or content without owing you payment or credit. Please don’t send anything confidential or anything you don’t have the right to share.</p>

    <h2>Using the site</h2>
    <p>Don’t misuse the site. For example, don’t submit spam, abusive or unlawful content, or automated votes, and don’t try to break in or overload the site. We may remove submissions or block access that violates these terms.</p>

    <h2>Fitness disclaimer</h2>
    <p>CYZBORG is about training culture, but nothing on this site is medical, fitness, or nutrition advice. Talk to a qualified professional before starting a new exercise program, and train within your limits.</p>

    <h2>Explicit content</h2>
    <p>Some CYZBORG music and product names contain explicit language.</p>

    <h2>Other sites</h2>
    <p>Links to streaming and social platforms are provided for convenience. We aren’t responsible for those services or their content.</p>

    <h2>Disclaimers and limits</h2>
    <p>The site is provided “as is,” without warranties of any kind. To the fullest extent permitted by law, CYZBORG LLC isn’t liable for indirect, incidental, or consequential damages arising from your use of the site.</p>

    <h2>Governing law</h2>
    <p>These terms are governed by the laws of the State of New Mexico, USA, without regard to conflict-of-law rules.</p>

    <h2>Changes</h2>
    <p>We may update these terms. When we do, we’ll change the date at the top. If you keep using the site after an update, you accept the new terms.</p>

    <h2>Contact</h2>
    <p>CYZBORG LLC, New Mexico, USA · <Mail/></p>
  </LegalPage>;
}
