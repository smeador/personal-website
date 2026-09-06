#!/usr/bin/env python3
"""Generate the resume PDF served at /docs/resume-sean-meador.pdf.

Usage:
    pip install reportlab
    python scripts/generate-resume.py [--out public/docs/resume-sean-meador.pdf]

The resume content lives in this file so the PDF stays reproducible: edit the
data below and re-run to regenerate. Keep it in sync with the experience
entries in src/content/professional/.
"""

import argparse
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate

# Colors
INK = HexColor("#333333")
MUTED = HexColor("#777777")
MUTED_DARK = HexColor("#555555")
LINK = HexColor("#2B6CB0")
RULE = HexColor("#BBBBBB")

NAME = "Sean Meador"
CONTACT = (
    '<link href="http://meador.me">meador.me</link>'
    " &#183; "
    '<link href="mailto:sean@meador.me">sean@meador.me</link>'
    " &#183; 214-208-3747 &#183; "
    '<link href="http://linkedin.com/in/seanmeador">linkedin.com/in/seanmeador</link>'
)

SUMMARY = (
    "Founder and engineering leader with 15+ years building products from zero to scale "
    "across consumer and enterprise software. I’ve grown engineering organizations from "
    "first hire to 30+ engineers, developing managers and leading cross-functional teams. I "
    "bring a strong product mindset, integrating across the stack to turn data and ML "
    "capabilities into thoughtfully designed customer-facing solutions."
)

# Each company: name plus one entry per role held there, newest first.
EXPERIENCE = [
    {
        "company": "Cherry",
        "roles": [
            {
                "title": "Engineering Manager",
                "meta": "Aug 2026 – Present · Austin, TX (Remote)",
                "summary": (
                    "Joined Cherry, a healthcare financing platform that enables providers to "
                    "offer their patients flexible payment plans, to lead a new product "
                    "development team in the Provider org. Building zero-to-one products with "
                    "the goal to help our providers grow their practices and thrive."
                ),
            },
        ],
    },
    {
        "company": "Afresh",
        "roles": [
            {
                "title": "Principal Engineer",
                "meta": "May 2025 – Jul 2026 · San Francisco, CA (Remote)",
                "summary": (
                    "Transitioned into a Principal Engineer role to lead deep technical "
                    "projects, provide strategic guidance, and drive AI enablement across a "
                    "50-person engineering organization."
                ),
                "bullets": [
                    "Led org-wide migration of the data platform from Snowflake to Databricks, "
                    "reducing overall infrastructure costs and consolidating the developer toolchain",
                    "Led cross-team adoption of a new ML ordering framework, improving accuracy "
                    "and enabling consuming teams to simplify extensive parts of the data model",
                    "Provided technical guidance and oversight for the migration of the primary "
                    "live database to a highly scalable managed solution",
                    "Built an automated data management system to eliminate storage overruns, "
                    "significantly reducing operational burden on the engineering team",
                ],
            },
            {
                "title": "Director of Product Engineering",
                "meta": "Jun 2019 – May 2025 · San Francisco, CA (In Person, Remote)",
                "summary": (
                    "Grew the Product Engineering function from a team of 1 to 30+ people "
                    "spanning multiple teams and product lines. Owned all customer-facing "
                    "applications, working closely with Data, Analytics, and ML teams to "
                    "integrate their services into our features. Helped grow revenue from 6 to 8 "
                    "figures while achieving a cumulative 200+ million pounds of food waste "
                    "prevention."
                ),
                "bullets": [
                    "Managed cross-functional teams of mobile, full-stack, QA, and product data engineers",
                    "Hired first 15+ engineers and 5 engineering managers, developing them to lead "
                    "their teams independently",
                    "Expanded store-level ordering and inventory products to include all fresh "
                    "departments and new device types (scanners)",
                    "Improved system scalability and resiliency to support tens of thousands of "
                    "store-departments and a large national retailer (Albertsons)",
                    "Created a corporate web portal and data pipelines to enable retailers to "
                    "manage operational data and view user adherence analytics",
                    "Scaled team structure, processes, and operations to support multiple product "
                    "lines, on-call rotations, and enterprise SLAs",
                ],
            },
            {
                "title": "Lead Product Engineer",
                "meta": "Oct 2018 – Jun 2019 · San Francisco, CA",
                "summary": (
                    "Joined as the 2nd employee and founding engineer at Afresh, an AI-powered "
                    "solution to optimize grocery store ordering for fresh food departments with "
                    "the goal of reducing food waste."
                ),
                "bullets": [
                    "Developed core ordering product from early prototype to enterprise-ready "
                    "solution deployed at first 3 customers",
                    "Built initial iPad app, API backend, and product data models that laid "
                    "foundation for years to come",
                    "Worked closely with customers to understand store operations and create "
                    "tailored solutions",
                ],
            },
        ],
    },
    {
        "company": "Rakuten Americas",
        "roles": [
            {
                "title": "Engineering Manager",
                "meta": "Oct 2016 – Oct 2018 · San Mateo, CA",
                "summary": (
                    "Managed a 5-person team responsible for all mobile applications across "
                    "platforms with 2M+ total users. Our apps powered a market research business "
                    "that grew to 8-figure revenue with Fortune 500 customers."
                ),
                "bullets": [
                    "Owned team roadmap and hired 3 new engineers to support growth",
                    "Collaborated closely with Product &amp; Design to grow user base through new "
                    "features and delightful experiences",
                    "Led re-platforming of legacy Slice apps to Swift and Kotlin",
                    "Drove the migration of Unroll.Me app to React Native for cross-platform support",
                    "Developed new analytics stack to better measure user behavior and increase "
                    "conversion rates",
                    "Expanded management scope to include mobile QA and Customer Support "
                    "functions, owning full customer experience and product quality",
                ],
            },
            {
                "title": "Lead Mobile Engineer (Slice)",
                "meta": "Nov 2011 – Oct 2016 · San Mateo, CA",
                "summary": (
                    "Joined e-commerce startup Slice as an early employee to lead all iOS "
                    "development. Slice was regularly featured as a top package tracking app in "
                    "the App Store. Slice and Unroll.Me were acquired and merged by Rakuten in "
                    "2014."
                ),
                "bullets": [
                    "Implemented the foundational iOS platform and toolkit, including data caching "
                    "and syncing layers to support offline usage",
                    "Developed core iOS features for Slice such as purchase and package tracking, "
                    "refund management, and spending analytics",
                    "Built the Unroll.Me iOS app from scratch, an email management app that "
                    "achieved top-10 overall App Store ranking and scaled to millions of users",
                ],
            },
        ],
    },
    {
        "company": "Mozign",
        "roles": [
            {
                "title": "Founder &amp; Engineer",
                "meta": "May 2010 – Mar 2012 · Dallas, TX",
                "summary": (
                    "Founded a mobile app consulting company, leading software development of "
                    "custom mobile apps and full-stack backends for various clients including a "
                    "Euroleague basketball team, a popular poker website, and local businesses."
                ),
                "bullets": [
                    "Hired and mentored a 3-person engineering team, managing technical direction "
                    "and code quality across all client projects",
                    "Managed product and design alongside my cofounder, together owning the full "
                    "product lifecycle and client engagement",
                ],
            },
        ],
    },
]

EDUCATION = [
    {
        "title": "<b>Stanford University</b> — Graduate Coursework, Computer Science",
        "meta": "Sep 2009 – Mar 2010 · Focus in Computer Graphics. TA for CS 106A and CS108.",
    },
    {
        "title": "<b>Stanford University</b> — BS, Computer Science",
        "meta": (
            "Sep 2005 – Jun 2009 · Coursework: Computer Graphics, Computer Vision, "
            "Machine Learning, Compilers, Networking."
        ),
    },
]

SPIE_URL = (
    "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/7240/72401O/"
    "Painted-or-printed-Correlation-analysis-of-the-brickwork-in-Jan/10.1117/12.817186.short"
)
RELIGHTING_URL = "https://www.meador.me/docs/project-interactive-relighting.pdf"

PROJECTS = [
    "<b>Technical Advisor</b> (2024–2025): Advised early-stage startups The Weet "
    "(finance app) and Proxi (social networking)",
    f'<b><link href="{SPIE_URL}" color="#2B6CB0">Painted or Printed? Correlation analysis of '
    "brickwork…</link></b> — Published in SPIE (2009), with Prof. David Stork and Petria Nobel",
    f'<b><link href="{RELIGHTING_URL}" color="#2B6CB0">Interactive Lighting of Macro Photography'
    "</link></b> — Graduate project (2008), with Alexis Chan",
]


# The resume is meant to fit two pages, with all of the Afresh roles on page
# one. There is only ~4pt of slack at the bottom of page one, so check the
# page breaks after adding content.
def build_styles():
    return {
        "name": ParagraphStyle(
            "name",
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            alignment=TA_CENTER,
            textColor=INK,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "contact",
            fontName="Helvetica",
            fontSize=9.5,
            leading=12,
            alignment=TA_CENTER,
            textColor=LINK,
        ),
        "section": ParagraphStyle(
            "section",
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=15,
            textColor=INK,
            spaceAfter=3,
        ),
        "company": ParagraphStyle(
            "company",
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=15,
            textColor=INK,
            spaceBefore=6,
        ),
        "role": ParagraphStyle(
            "role",
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=INK,
            spaceBefore=5,
            spaceAfter=1,
        ),
        "meta": ParagraphStyle(
            "meta",
            fontName="Helvetica-Oblique",
            fontSize=9.5,
            leading=12,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "body": ParagraphStyle(
            "body",
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=INK,
            spaceBefore=2,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=INK,
            leftIndent=12,
            spaceBefore=1.5,
            spaceAfter=1.5,
        ),
        "edu": ParagraphStyle(
            "edu",
            fontName="Helvetica",
            fontSize=9.5,
            leading=12,
            textColor=INK,
            spaceBefore=3,
            spaceAfter=1,
        ),
        "edu_meta": ParagraphStyle(
            "edu_meta",
            fontName="Helvetica",
            fontSize=9,
            leading=11,
            textColor=MUTED_DARK,
            spaceAfter=3,
        ),
    }


def rule():
    return HRFlowable(
        width="100%", thickness=0.5, color=RULE, spaceBefore=10, spaceAfter=6
    )


def build_story(styles):
    story = [
        Paragraph(NAME, styles["name"]),
        Paragraph(CONTACT, styles["contact"]),
        rule(),
        Paragraph("SUMMARY", styles["section"]),
        Paragraph(SUMMARY, styles["body"]),
        rule(),
        Paragraph("EXPERIENCE", styles["section"]),
    ]

    for company in EXPERIENCE:
        for index, role in enumerate(company["roles"]):
            # Keep a heading with the text that introduces it so a role never
            # ends up stranded at the bottom of a page.
            heading = []
            if index == 0:
                heading.append(Paragraph(company["company"], styles["company"]))
            heading.append(Paragraph(role["title"], styles["role"]))
            heading.append(Paragraph(role["meta"], styles["meta"]))
            if role.get("summary"):
                heading.append(Paragraph(role["summary"], styles["body"]))
            story.append(KeepTogether(heading))
            for bullet in role.get("bullets", []):
                story.append(Paragraph(f"• {bullet}", styles["bullet"]))

    story.append(rule())
    story.append(Paragraph("EDUCATION", styles["section"]))
    for school in EDUCATION:
        story.append(Paragraph(school["title"], styles["edu"]))
        story.append(Paragraph(school["meta"], styles["edu_meta"]))

    story.append(rule())
    story.append(Paragraph("PROJECTS &amp; PUBLICATIONS", styles["section"]))
    for project in PROJECTS:
        story.append(Paragraph(f"• {project}", styles["bullet"]))

    return story


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--out",
        default="public/docs/resume-sean-meador.pdf",
        type=Path,
        help="output path for the generated PDF",
    )
    args = parser.parse_args()

    args.out.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(args.out),
        pagesize=letter,
        # Frames add 6pt of padding on each side, so the content box sits
        # 42pt (0.58in) from the sides and 30pt (0.42in) from the top and
        # bottom. These margins are what keep the whole Afresh tenure on
        # page one; widening them pushes its last role onto page two.
        leftMargin=36,
        rightMargin=36,
        topMargin=24,
        bottomMargin=24,
        title=f"Resume — {NAME}",
        author=NAME,
    )
    doc.build(build_story(build_styles()))
    print(f"wrote {args.out}")


if __name__ == "__main__":
    main()
