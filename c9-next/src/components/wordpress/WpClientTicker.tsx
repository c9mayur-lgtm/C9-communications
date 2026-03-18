'use client';

import React from 'react';

export const WpClientTicker = () => {
  return (
    <section className="bg-[#f8f7fc] py-10 md:py-14 border-t border-gray-100 overflow-hidden relative">
      <style>{`
        @keyframes ticker-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ticker-row-left {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-left 40s linear infinite;
          will-change: transform;
        }
        .ticker-row-right {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-right 44s linear infinite;
          will-change: transform;
        }
        .ticker-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px 8px 10px;
          border-radius: 100px;
          background: white;
          border: 1px solid #e5e7f0;
          margin: 0 6px;
          white-space: nowrap;
          cursor: default;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          user-select: none;
        }
        .ticker-pill:hover {
          border-color: rgba(93, 0, 214, 0.3);
          box-shadow: 0 2px 12px rgba(93, 0, 214, 0.08);
        }
        .ticker-pill-label {
          font-size: 13px;
          font-weight: 700;
          color: #6b7280;
          letter-spacing: 0.02em;
          font-family: "Proxima Nova", sans-serif;
          text-transform: uppercase;
        }
      `}</style>

      {/* Heading */}
      <p
        className="text-center font-bold tracking-[0.18em] uppercase text-slate-400 text-[11px] mb-8"
        style={{ fontFamily: '"Proxima Nova", sans-serif' }}
      >
        Trusted by leading Australian businesses
      </p>

      {/* Gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10"
        style={{ width: '120px', background: 'linear-gradient(to right, #f8f7fc 60%, transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10"
        style={{ width: '120px', background: 'linear-gradient(to left, #f8f7fc 60%, transparent)' }} />

      <div className="flex flex-col gap-3 overflow-hidden">

        {/* Row 1 — scrolls LEFT */}
        <div className="w-full overflow-hidden">
          <div className="ticker-row-left">
            {[
              { name: 'Launch Housing', logo: 'https://logo.clearbit.com/launchhousing.org.au', isWordmark: false },
              { name: 'Akubra',         logo: 'https://logo.clearbit.com/akubra.com.au', isWordmark: false },
              { name: 'Pacific Steel',  logo: 'https://logo.clearbit.com/pacificsteel.com.au', isWordmark: false },
              { name: 'Novo Shoes',     logo: 'https://logo.clearbit.com/novoshoes.com.au', isWordmark: false },
              { name: 'RetailCare',     logo: 'https://logo.clearbit.com/retailcare.com.au', isWordmark: false },
              { name: 'Atlassian',      logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/atlassian.svg', isWordmark: true },
              { name: 'Microsoft',      logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg', isWordmark: true },
              { name: 'Salesforce',     logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/salesforce.svg', isWordmark: true },
              { name: 'Slack',          logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/slack.svg', isWordmark: true },
              { name: 'Zoom',           logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/zoom.svg', isWordmark: true },
              // duplicate for parallax
              { name: 'Launch Housing', logo: 'https://logo.clearbit.com/launchhousing.org.au', isWordmark: false },
              { name: 'Akubra',         logo: 'https://logo.clearbit.com/akubra.com.au', isWordmark: false },
              { name: 'Pacific Steel',  logo: 'https://logo.clearbit.com/pacificsteel.com.au', isWordmark: false },
              { name: 'Novo Shoes',     logo: 'https://logo.clearbit.com/novoshoes.com.au', isWordmark: false },
              { name: 'RetailCare',     logo: 'https://logo.clearbit.com/retailcare.com.au', isWordmark: false },
              { name: 'Atlassian',      logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/atlassian.svg', isWordmark: true },
              { name: 'Microsoft',      logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft.svg', isWordmark: true },
              { name: 'Salesforce',     logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/salesforce.svg', isWordmark: true },
              { name: 'Slack',          logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/slack.svg', isWordmark: true },
              { name: 'Zoom',           logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/zoom.svg', isWordmark: true },
            ].map((c, i) => (
              <div key={i} className="ticker-pill">
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{ height: c.isWordmark ? '20px' : '18px', width: 'auto', objectFit: 'contain' }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                {!c.isWordmark && <span className="ticker-pill-label">{c.name}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls RIGHT */}
        <div className="w-full overflow-hidden">
          <div className="ticker-row-right">
            {[
              { name: 'Google',           logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/google.svg', isWordmark: true },
              { name: 'AWS',              logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws-amplify.svg', isWordmark: true },
              { name: 'HubSpot',          logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/hubspot.svg', isWordmark: true },
              { name: 'Zendesk',          logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/zendesk.svg', isWordmark: true },
              { name: 'Intercom',         logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/intercom.svg', isWordmark: true },
              { name: 'Adobe',            logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/adobe.svg', isWordmark: true },
              { name: 'ActiveCampaign',   logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/active-campaign.svg', isWordmark: true },
              { name: 'Mailchimp',        logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/mailchimp.svg', isWordmark: true },
              { name: 'Shopify',          logo: 'https://logo.clearbit.com/shopify.com', isWordmark: false },
              { name: 'Trello',           logo: 'https://logo.clearbit.com/trello.com', isWordmark: false },
              // duplicate
              { name: 'Google',           logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/google.svg', isWordmark: true },
              { name: 'AWS',              logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws-amplify.svg', isWordmark: true },
              { name: 'HubSpot',          logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/hubspot.svg', isWordmark: true },
              { name: 'Zendesk',          logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/zendesk.svg', isWordmark: true },
              { name: 'Intercom',         logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/intercom.svg', isWordmark: true },
              { name: 'Adobe',            logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/adobe.svg', isWordmark: true },
              { name: 'ActiveCampaign',   logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/active-campaign.svg', isWordmark: true },
              { name: 'Mailchimp',        logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/mailchimp.svg', isWordmark: true },
              { name: 'Shopify',          logo: 'https://logo.clearbit.com/shopify.com', isWordmark: false },
              { name: 'Trello',           logo: 'https://logo.clearbit.com/trello.com', isWordmark: false },
            ].map((c, i) => (
              <div key={i} className="ticker-pill">
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{ height: c.isWordmark ? '20px' : '18px', width: 'auto', objectFit: 'contain' }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                {!c.isWordmark && <span className="ticker-pill-label">{c.name}</span>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
