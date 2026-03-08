import { TopographyBackground } from "@/components/ui/topography"
import { useEffect, useState } from "react"
import {
  DiCode,
  DiCss3,
  DiDatabase,
  DiGit,
  DiGithub,
  DiGithubAlt,
  DiGithubBadge,
  DiHtml5,
  DiJavascript,
  DiJqueryLogo,
  DiJsBadge,
  DiMitlicence,
  DiMysql,
  DiNodejs,
  DiPhp,
  DiPostgresql,
  DiReact,
  DiResponsive,
  DiTerminal,
  DiTrello,
  DiUbuntu,
  DiUnitySmall,
  DiVisualstudio,
  DiWindows,
} from "react-icons/di"

export function App() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(undefined, { timeZone: "Europe/Copenhagen" })
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          timeZone: "Europe/Copenhagen",
        })
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <TopographyBackground className="pointer-none -z-10 overflow-y-auto">
      <div className="z-10 flex min-h-dvh w-screen flex-col justify-center px-5 md:px-40">
        {/* 1st row */}

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <header className="mt-8 flex flex-col">
            <h1 className="text-6xl font-bold text-white">tacothedev</h1>
            <h2 className="text-center text-xl font-semibold text-muted-foreground md:text-start">
              Full stack developer
            </h2>
          </header>
          <div className="flex items-center gap-4">
            <div className="p-2">
              <p className="text-lg font-semibold text-white">Coding since</p>
              <p className="font-time text-xl font-bold text-muted-foreground">
                2020
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg font-semibold text-white">My local time</p>
              <p className="font-time text-xl font-bold text-muted-foreground">
                {time}
              </p>
            </div>
          </div>
        </div>

        {/* 2nd row */}

        <div>
          <h1 className="mt-10 text-2xl font-semibold text-white">About me</h1>
          <p className="w-[70%] text-pretty text-muted-foreground">
            I am a {new Date().getFullYear() - 2007}-year-old developer from
            Denmark currently pursuing an education as a Computer technician
            with a focus on Programming. My journey started in 2020 with a
            curiosity for how game worlds are built, and it has since evolved
            into a passion for building scalable, modern web applications.
          </p>
          <h3 className="mt-5 text-2xl text-white">
            The Journey: From Lua to Full-Stack
          </h3>
          <p className="w-[70%] text-pretty text-muted-foreground">
            My coding story began within the Cfx.re (FiveM) ecosystem. Like many
            developers, I started with a "pure Lua" script and a lot of YouTube
            tutorials. Those early days were defined by trial, error, and
            dissecting other people's code to understand the logic behind the
            mechanics.
          </p>
          <ul className="list-disc gap-4 p-4">
            <li className="text-pretty text-muted-foreground">
              <span className="text-white">The "Biggest Hit": </span> My most
              successful project to date is a custom FiveM Dealership Script.
              While I look back at the code now and see room for improvement (we
              all have that "what was I thinking?" moment with old code!), its
              popularity taught me how to handle user feedback and build
              features that solve actual problems for server owners.
            </li>
            <li className="text-pretty text-muted-foreground">
              <span className="text-white">Giving Back: </span> I am a strong
              believer in Open Source. I regularly release FiveM plugins to help
              newcomers learn the ropes, just as I did when I first started.
            </li>
          </ul>
        </div>

        {/* 3rd row */}

        <div>
          <h1 className="mt-10 text-2xl font-semibold text-white">
            My techstack
          </h1>
          <div className="flex w-full flex-wrap gap-4 py-4">
            <DiJsBadge size={50} color="#ffffff" />
            <DiReact size={50} color="#ffffff" />
            <DiNodejs size={50} color="#ffffff" />
            <DiPostgresql size={50} color="#ffffff" />
            <DiMysql size={50} color="#ffffff" />
            <DiHtml5 size={50} color="#ffffff" />
            <DiCss3 size={50} color="#ffffff" />
            <DiJavascript size={50} color="#ffffff" />
            <DiUbuntu size={50} color="#ffffff" />
            <DiDatabase size={50} color="#ffffff" />
            <DiCode size={50} color="#ffffff" />
            <DiGit size={50} color="#ffffff" />
            <DiGithub size={50} color="#ffffff" />
            <DiJqueryLogo size={50} color="#ffffff" />
            <DiPhp size={50} color="#ffffff" />
            <DiResponsive size={50} color="#ffffff" />
            <DiTrello size={50} color="#ffffff" />
            <DiVisualstudio size={50} color="#ffffff" />
            <DiWindows size={50} color="#ffffff" />
            <DiUnitySmall size={50} color="#ffffff" />
            <DiTerminal size={50} color="#ffffff" />
            <DiMitlicence size={50} color="#ffffff" />
            <DiGithubAlt size={50} color="#ffffff" />
            <DiGithubBadge size={50} color="#ffffff" />
          </div>
        </div>

        {/* 4th row */}

        <footer>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} tacothedev. All rights reserved.
          </p>
        </footer>
      </div>
    </TopographyBackground>
  )
}

export default App
