import * as React from "react"

import { type Metadata } from "next"

import Presentation from "components/Presentation"
import About from "components/Slides/About"
import Cover from "components/Slides/Cover"
import End from "components/Slides/End"
import Points from "components/Slides/Points"
import Profile from "components/Slides/Profile"
import QuoteBlock from "components/Slides/QuoteBlock"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Devtuition Intro",
  description: "Devtuition - learn by doing",
})

const slides: React.ReactNode[] = [
  <Cover
    key="cover"
    title="Welcome"
    subtitle="Let's get started!"
    className="w-[680px]"
  />,
  <Profile
    key="profile"
    profiles={[
      {
        name: "Solomon Akinbiyi",
        title: "Founder/Software Engineer @ Devtuition",
        url: "x.com/SolomonAkinbiyi",
        avatar:
          "https://pbs.twimg.com/profile_images/1754948927449665537/9BA3KUIK_400x400.jpg",
      },
      {
        name: "Jitendra Nirnejak",
        title: "Software Engineer / Instructor @ Devtuition",
        url: "x.com/jeetnirnejak",
        avatar:
          "https://media.licdn.com/dms/image/v2/C4E03AQFWbYvGzYyO7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517037821384?e=1735171200&v=beta&t=H7591ih2ycbji9eAORgs42TOfrOLzq0Lqd7HKCv0_1I",
      },
    ]}
    className="w-[680px]"
  />,
  <About
    key="about"
    title="Devtuition and its mission"
    subtitle="The unique approach to teaching coding through real-world startup projects."
    className="w-[680px]"
  />,
  <QuoteBlock
    key="quote"
    quote="Tell me and I forget. Teach me and I remember. Involve me and I learn."
    author="Benjamin Franklin"
    className="w-[680px]"
  />,
  <Points
    key="points-1"
    title="Project-based learning"
    points={[
      "Industry based approach",
      "Variety based learning",
      "Showing as proof of work(recruiters & clients)",
      "As a startup venture.",
    ]}
    className="w-[680px]"
  />,
  <Points
    key="points-2"
    title="Process of building Projects"
    points={[
      "Planning and Task Management",
      "Building and pushing to Github",
      "Code Review",
      "Testing and QA",
      "Documentation",
    ]}
    className="w-[680px]"
  />,
  <Points
    key="points-3"
    title="What should you do while you’re in the program"
    points={[
      "Interact in the community - Ask questions, share progress, help others",
      "Share your progress - Twitter, LinkedIn, Facebook, etc.",
      "Write Blogs",
    ]}
    className="w-[680px]"
  />,
  <Points
    key="portfolio"
    title="Portfolio"
    points={[
      "Show off your skills",
      "Help recruiters and clients see your work",
      "Present your projects",
      "List out your blogs",
    ]}
    className="w-[680px]"
  />,
  <About key="question" title="Questions?" className="w-[680px]" />,
  <End key="end" />,
]

const Home: React.FC = () => {
  return (
    <div>
      <Presentation
        slides={slides}
        sourceLink="nirnejak/devtuition" // format: '<username>/<repository>'
      />
    </div>
  )
}

export default Home
