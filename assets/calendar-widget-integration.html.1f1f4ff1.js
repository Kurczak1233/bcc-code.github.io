import{_ as r,r as l,o as s,c as d,a as n,b as e,d as a,f as t}from"./app.1ded8a6d.js";const o={},u=t('<h1 id="calendar-integration" tabindex="-1"><a class="header-anchor" href="#calendar-integration" aria-hidden="true">#</a> Calendar - Integration</h1><h2 id="page-contents" tabindex="-1"><a class="header-anchor" href="#page-contents" aria-hidden="true">#</a> Page Contents</h2><ul><li><a href="#link-to-share-with-brunstad">Link to share with Brunstad</a></li><li><a href="#icalendar-feed-format">ICalendar Feed Format</a></li><li><a href="#icalendar-feed-example">ICalendar Feed Example</a></li><li><a href="#developer-tips">Developer Tips</a></li></ul><hr><h2 id="integrate-your-calendar-with-brunstad-portal" tabindex="-1"><a class="header-anchor" href="#integrate-your-calendar-with-brunstad-portal" aria-hidden="true">#</a> Integrate your calendar with Brunstad Portal</h2><p>The calendar on Brunstad Portal contains events from the Brunstad calendar in addition to events from a personalized selection of local church calendars. Users are able to choose the local calendars from a list and have these shown in the same view as the Brunstad calendar. For instance, the friends from Germany can see events from Brunstad, Hessenhöfe and their local church in a merged view.</p><p>This personalized calendar is also available in iCal format, so that it can be added to your calendar in Outlook and on your cell phone.</p><p>The calendars are synchronized as iCalendars, and here you’ll find information on how you as a developer should make the iCalendar feed.</p><h2 id="how-do-we-share-our-calendar-with-brunstad" tabindex="-1"><a class="header-anchor" href="#how-do-we-share-our-calendar-with-brunstad" aria-hidden="true">#</a> How do we share our calendar with Brunstad?</h2><p>In order to make it possible to add your calendar to the list, it is required that you create a dynamic <strong>iCalendar feed</strong> and send the hyperlink to [support](mailto:it@bcc.no?subject=Support Developer BCC).</p>',10),c={href:"/docs/bcc-signon/openid-connect#protect-news-feed-and-calendar",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"what-is-icalendar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#what-is-icalendar","aria-hidden":"true"},"#"),e(" What is ICalendar?")],-1),m={href:"https://en.wikipedia.org/wiki/ICalendar",target:"_blank",rel:"noopener noreferrer"},h={href:"https://datatracker.ietf.org/doc/html/rfc5545",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"Google Calendar has built-in support for iCal export. This means that the churches that use Google Calendar don’t have to do more than sending us the «private» link to their Google Calendar.",-1),p={href:"https://support.google.com/calendar/answer/37648?hl=en",target:"_blank",rel:"noopener noreferrer"},f=t('<h2 id="link-to-share-with-brunstad" tabindex="-1"><a class="header-anchor" href="#link-to-share-with-brunstad" aria-hidden="true">#</a> Link to share with Brunstad</h2><p><strong>This article only applies if you make the feed yourself. If you’re using existing services, like Google Calendar, you don’t have follow this article.</strong></p><p>The link to your iCalendar feed should follow this syntax:</p><h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h3><p><code>http://{domain name}/{file path}?start-min={RFC 3339}&amp;start-max={RFC 3339}&amp;updated-min={RFC 3339}</code></p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p><code>http://church.brunstad.org/icalfeed?start-min=2010-12-19T16:39:57-08:00&amp;start-max=2011-01-19T16:39:57-08:00&amp;updated-min=2011-03-20T16:39:57-08:00</code></p>',7),C={href:"https://tools.ietf.org/html/rfc3339#section-5.8",target:"_blank",rel:"noopener noreferrer"},T={href:"/docs/bcc-signon/openid-connect#protect-news-feed-and-calendar",target:"_blank",rel:"noopener noreferrer"},g=t(`<table><thead><tr><th>Parameters</th><th></th></tr></thead><tbody><tr><td><code>start-min</code></td><td>The first start date of events being returned.</td></tr><tr><td><code>start-max</code></td><td>The latest start date of events being returned.</td></tr><tr><td><code>updated-min</code></td><td>Only events updated after this date should be returned.</td></tr></tbody></table><h2 id="icalendar-feed-format" tabindex="-1"><a class="header-anchor" href="#icalendar-feed-format" aria-hidden="true">#</a> ICalendar Feed Format</h2><p>The format should be standard iCal format, but the calendar on Brunstad Portal will only read VEVENT elements (VTODO and VJOURNAL will be ignored).</p><p>The most important fields for each VEVENT element are:</p><ul><li>UID DTSTART (RFC 3339 format)</li><li>DTEND (RFC 3339 format)</li><li>LAST-MODIFIED (RFC 3339 format)</li><li>STATUS (Confirmed/Tentative/Cancelled)</li><li>SUMMARY (title)</li><li>DESCRIPTION (optional)</li><li>LOCATION (optional)</li><li>ORGANIZER (optional)</li></ul><p>UID can for example be in format {domain name}-{ID}, where ID is the unique identification of the event from your database. <strong>UID has to be the same each time the same event is retrieved.</strong></p><p>Events occurring at central conference centers that have their own calendar on Brunstad Portal (for instance Brunstad, Pagedal and Hessenhöfe) should not be included in the calendar from your local church.</p><h3 id="categories" tabindex="-1"><a class="header-anchor" href="#categories" aria-hidden="true">#</a> Categories</h3><p>We would like everyone to use the categories on the list below in the CATEGORIES field, so that categories are common for all calendars.</p><p>A category with the name of the church will automatically be set, so you don’t need to set other categories than those describing what kind of event the appointment concerns.</p><p>It is fully possible to have several categories per event, the event «Meeting with collection » will for example have both categories Meeting and Collection. The categories Brothers and Sisters should only be used if the event regards only either brothers or sisters. If the category Internal is set, the article will only be shown to friends from your local church. You may also choose to have a separate feed containing events that should only be visible to a specific group of people.</p><p>If the category Brunstad is set, the event will not be imported, as Brunstad events have their own calendar on Brunstad Portal.</p><p>The following categories can be used (these should NOT be translated into other languages):</p><ul><li>Conference</li><li>Feast</li><li>Meeting</li><li>Collection</li><li>Work party</li><li>Activity Club</li><li>Sport</li><li>Music</li><li>Trip</li><li>Children</li><li>Youth</li><li>Seniors</li><li>Brothers</li><li>Sisters</li><li>Jubilee</li><li>Wedding</li><li>Funeral</li></ul><h2 id="icalendar-feed-example" tabindex="-1"><a class="header-anchor" href="#icalendar-feed-example" aria-hidden="true">#</a> ICalendar Feed Example</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BEGIN:VCALENDAR
    VERSION:2.0
    PRODID:-//ddaysoftware.com//NONSGML DDay.iCal 1.0//EN
    BEGIN:VTIMEZONE
        TZID:Central European Standard Time
        BEGIN:STANDARD
            DTSTART; VALUE=DATE:18000101
            RRULE:FREQ=YEARLY;BYDAY=SU;BYHOUR=3;BYMINUTE=0;BYMONTH=10;BYMONTHDAY=25,26,27,28,29,30,31
            TZOFFSETFROM:+0200
            TZOFFSETTO:+0100
        END:STANDARD
        BEGIN:DAYLIGHT
            DTSTART; VALUE=DATE:18000101
            RRULE:FREQ=YEARLY;BYDAY=SU;BYHOUR=2;BYMINUTE=0;BYMONTH=3;BYMONTHDAY=25,26,27,28,29,30,31
            TZOFFSETFROM:+0100
            TZOFFSETTO:+0200
        END:DAYLIGHT
    END:VTIMEZONE
    BEGIN:VEVENT
        STATUS:Confirmed
        SUMMARY:Velkomstfest
        DESCRIPTION:Gruppe 2 har ansvaret for festen.
        CATEGORIES: Feast
        CREATED:20110110T215920
        ORGANIZER; CN=John Doe:MAILTO:john.doe@example.com
        DTEND:20110326T210000
        DTSTAMP:20110324T151340
        DTSTART:20110326T180000
        LAST-MODIFIED:20110323T211704
        LOCATION:Adjunkt Hauglands gate 50
        SEQUENCE:5
        UID:stavanger.brunstadworld.org-4672
    END:VEVENT
    BEGIN:VEVENT
        STATUS:Confirmed
        SUMMARY:AKJ-tur
        DESCRIPTION:For de i 6. og 7. klasse
        CATEGORIES:Trip
        CREATED:20101026T200043
        DTEND:20110220T200000
        DTSTAMP:20110324T151341
        DTSTART:20110218T173000
        LAST-MODIFIED:20110215T103808
        LOCATION:Solheimsdalen
        SEQUENCE:3
        UID:stavanger.brunstadworld.org-4473
    END:VEVENT
END:VCALENDAR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="developer-tips" tabindex="-1"><a class="header-anchor" href="#developer-tips" aria-hidden="true">#</a> Developer Tips</h2><h3 id="content-type" tabindex="-1"><a class="header-anchor" href="#content-type" aria-hidden="true">#</a> Content-Type</h3><p>When the iCalendar feed is generated, the HTTP content-type header should be set to <strong>text/calendar</strong>.</p><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h3><p>There are several components available for development of iCalendar feeds in PHP.</p>`,21),E={href:"http://bradym.net/php/creating-icalendar-ics-files-with-php",target:"_blank",rel:"noopener noreferrer"},D={href:"http://extensions.joomla.org/extensions/extension-specific/eventlist-extensions/7219",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"asp-net",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#asp-net","aria-hidden":"true"},"#"),e(" ASP.NET")],-1),q={href:"http://www.ddaysoftware.com/Pages/Projects/DDay.iCal/",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Collections.Generic;
using System.Web;
using System.Data.Sql;
using System.Data.SqlClient;
using DDay.iCal;
using DDay.iCal.Serialization.iCalendar;
using System.Web.Configuration;

namespace iCalExport.General
{
    public class iCalFeed : IHttpHandler
    {
        public HttpRequest Request
        {
            get
            {
                return HttpContext.Current.Request;
            }
        }
        public void ProcessRequest(HttpContext context)
        {
            string prefix = WebConfigurationManager.AppSettings[&quot;DomainName&quot;];
            DateTime minAllowableDate = new DateTime(1900, 1, 1);

            string qUpdatedMin = Request.QueryString[&quot;updated-min&quot;];
            DateTime updatedMin;
            if (!DateTime.TryParse(qUpdatedMin, out updatedMin) || updatedMin &lt; minAllowableDate)
                updatedMin = new DateTime(1900, 1, 1);


            string qStartMin = Request.QueryString[&quot;start-min&quot;];
            DateTime startMin;
            if (!DateTime.TryParse(qStartMin, out startMin) || startMin &lt; minAllowableDate)
                startMin = DateTime.Now.AddMonths(-3);


            string qStartMax = Request.QueryString[&quot;start-max&quot;];
            DateTime startMax;
            if (!DateTime.TryParse(qStartMax, out startMax) || startMax &lt; minAllowableDate)
                startMax = DateTime.MaxValue;

            context.Response.ContentType = &quot;text/calendar&quot;;

            iCalendar iCal = new iCalendar();

            TimeZoneInfo tzi = null;
            tzi = TimeZoneInfo.FindSystemTimeZoneById(&quot;Central European Standard Time&quot;);
            iCal.AddTimeZone(tzi);

            using (SqlConnection sqlConn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings[&quot;connstring&quot;].ConnectionString))
            {
                SqlCommand sqlComm = new SqlCommand(&quot;SELECT * FROM Calendar WHERE EventStart &gt; @startmin AND EventStart &lt; @startmax AND EventModifiedDate &gt; @updatedmin ORDER BY EventModifiedDate DESC&quot;, sqlConn);
                sqlComm.Parameters.AddWithValue(&quot;@startmin&quot;, startMin);
                sqlComm.Parameters.AddWithValue(&quot;@startmax&quot;, startMax);
                sqlComm.Parameters.AddWithValue(&quot;@updatedmin&quot;, updatedMin);
                sqlConn.Open();
                SqlDataReader dr = sqlComm.ExecuteReader();

                while (dr.Read())
                {
                    Event evt = iCal.Create();
                    evt.UID = prefix + &quot;-&quot; + dr[&quot;EventID&quot;].ToString();
                    evt.DTStart = new iCalDateTime(Convert.ToDateTime(dr[&quot;EventStart&quot;]));
                    evt.DTEnd = new iCalDateTime(Convert.ToDateTime(dr[&quot;EventEnd&quot;]));
                    evt.Summary = dr[&quot;EventTitle&quot;].ToString();
                    evt.Description = dr[&quot;EventDescription&quot;].ToString();
                    evt.Location = dr[&quot;EventLocation&quot;].ToString();
                    evt.Status = Convert.ToBoolean(dr[&quot;EventIsCancelled&quot;]) ? EventStatus.Cancelled : EventStatus.Confirmed;

                    evt.Created = new iCalDateTime(Convert.ToDateTime(dr[&quot;EventCreatedDate&quot;]));
                    evt.LastModified = new iCalDateTime(Convert.ToDateTime(dr[&quot;EventModifiedDate&quot;]));

                    evt.Sequence = Convert.ToInt32(dr[&quot;EventVersion&quot;]);

                    evt.IsAllDay = Convert.ToBoolean(dr[&quot;EventIsAllDay&quot;]);

                    List Categories = new List();
                    using (SqlConnection sqlCatConn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings[&quot;connstring&quot;].ConnectionString))
                    {
                        SqlCommand sqlCatComm = new SqlCommand(&quot;SELECT BrunstadCategoryName FROM Categories WHERE NOT BrunstadCategoryName is null AND ID_Category IN (SELECT ID_Category FROM CalendarCategories WHERE ID_Calendar = @ID_Calendar)&quot;, sqlCatConn);
                        sqlCatComm.Parameters.AddWithValue(&quot;@ID_Calendar&quot;, dr[&quot;EventID&quot;].ToString());
                        sqlCatConn.Open();
                        SqlDataReader drCat = sqlCatComm.ExecuteReader();

                        while (drCat.Read())
                        {
                            Categories.Add(drCat[&quot;BrunstadCategoryName&quot;].ToString());
                        }
                    }
                    evt.Categories = Categories;


                }
            }

            iCalendarSerializer serializer = new iCalendarSerializer(iCal);

            context.Response.Write(serializer.SerializeToString(iCal));

        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(I,w){const i=l("ExternalLinkIcon");return s(),d("div",null,[u,n("p",null,[e("If you’re creating the feed yourself (i.e. not using Google or other existing services), please make sure the link is making use of a "),n("a",c,[e("Private URL"),a(i)]),e(".")]),v,n("p",null,[e("iCalendar is an open, simple, text-based format for calendar exchange on the Internet. You can read more about this on "),n("a",m,[e("Wikipedia"),a(i)]),e(".")]),n("p",null,[e("Detailed information regarding the format is found "),n("a",h,[e("here"),a(i)]),e(".")]),b,n("p",null,[e("You can read more about how to get your private iCal Link "),n("a",p,[e("here"),a(i)]),e(".")]),f,n("p",null,[n("strong",null,[n("a",C,[e("RFC3339"),a(i)])]),e(" is a standardized time format. Please make sure the link is making use of a "),n("a",T,[e("Private URL"),a(i)]),e("..")]),g,n("p",null,[e("See for example "),n("a",E,[e("this post"),a(i)]),e(".")]),n("p",null,[e("There are also existing solutions for CMS platforms like Joomla that can probably be taken into use with some customization. See for example "),n("a",D,[e("this extension"),a(i)]),e(".")]),S,n("p",null,[e("ASP.Net developers can use the "),n("a",q,[e("DDay.iCal"),a(i)]),e(" component to generate an iCal feed.")]),y])}const R=r(o,[["render",x],["__file","calendar-widget-integration.html.vue"]]);export{R as default};
