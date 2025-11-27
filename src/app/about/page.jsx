import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
    <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5444473500763929"
     crossorigin="anonymous"></script>
    </Head>
      <Navbar />
      <div>
        <div className="mt-16">
          <h1 className="md:text-5xl ml-7 text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">About Me</h1>
          <div className="flex space-x-8 p-4">
            <div className="hidden md:block w-1/4 overflow-clip h-[900px]">
              <Image src={"https://github.com/bensonibeabuchi/capstoneimages/blob/main/images/logo_mark.png?raw=true"} height={100} width={2000} alt="my portrait" />
            </div>
            <div className="md:w-3/4">
              <div className="md:ml-16">
                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">PROFESSIONAL SUMMARY</h2>
                  <p className="leading-loose"> I am a Microsoft Certified DevOps Engineer and Full Stack Developer with a strong focus on building scalable cloud applications and automated development workflows. I specialize in combining software engineering with DevOps practices—using automation, CI/CD, containerization, and cloud-native tools to help teams ship reliable, high-quality products.</p>
                  <p className="leading-loose">  
                    I develop solutions using React, Next.js, React Native, Expo, Python, Django, and Postgres, while also implementing DevOps tooling such as Azure DevOps, GitHub Actions, Docker, Terraform, and Azure cloud services. I&apos;m passionate about building systems that are maintainable, efficient, and secure—whether that&apos;s automating deployments, architecting cloud infrastructure, or designing smooth user experiences. With a strong focus on continuous improvement, I aim to empower development teams through automation and modern DevOps practices.
                  </p>

                </div>

                {/* EDUCATION  */}
                <div className="my-8 space-y-4 leading-loose">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">CERTIFICATION</h2>
                  <ul className="list-disc">
                      <li className="hover:cursor-pointer hover:underline"> <a href="https://learn.microsoft.com/api/credentials/share/en-us/BensonIbeabuchi-7773/D11B162360BC7FF5?sharingId=D4AAE92E91E1F382" target="_blank">Microsoft Certified: DevOps Engineer Expert</a> </li>
                      <li className="hover:cursor-pointer hover:underline"> <a href="https://learn.microsoft.com/api/credentials/share/en-us/BensonIbeabuchi-7773/FACF0EA96B0B5DA2?sharingId=D4AAE92E91E1F382" target="_blank">Microsoft Certified: Azure Administrator Associate </a> </li>
                      <li className="hover:cursor-pointer hover:underline"> <a href="https://www.credly.com/badges/fa821d45-fedd-4383-8702-50e30b6450cf/public_url" target="_blank">Full-Stack Developer | Meta</a> </li>
                      <li className="hover:cursor-pointer hover:underline"> <a href="https://coursera.org/share/6eab08731c8cd737a10f9f8676caf11e" target="_blank">iOS and Android Mobile App Developer  | IBM</a> </li>
                  </ul>
                </div>

                {/* WORK EXPERIENCE  */}

                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">WORK EXPERIENCE</h2>
                  <div className="leading-loose">
                    <div className="">
                      <p className="font-semibold">AZURE DEVOPS ENGINEER</p>
                      <p className="font-medium">Softmodel Tech</p>
                      <p className="italic">June 2025 - present</p>
                      <ul className="font-extralight list-disc">
                        <li>Designed and implemented CI/CD pipelines in Azure DevOps to automate build, test, and deployment stages.</li>
                        <li>Deployed containerized applications using Docker and managed Azure Kubernetes Service &#40;AKS&#41; clusters for scalability and resilience.</li>
                        <li>Automated infrastructure provisioning with Terraform and Azure Resource Manager &#40;ARM&#41; templates</li>
                        <li>Configured Azure Monitor and Application Insights to track application performance</li>

                      </ul>
                    </div>

                    <div className="mt-12">
                      <p className="font-semibold">FRONTEND DEVELOPER</p>
                      <p className="font-medium">Afrobasket</p>
                      <p className="italic">May 2025 - present</p>
                      <ul className="font-extralight list-disc">
                        <li>Collaborate with a distributed team to build and maintain a vendor management platform for an e-commerce webApp.</li>
                        <li>Integrate RESTful APIs, optimize performance, and manage state using Redux Toolkit.</li>
                      </ul>
                    </div>

                  </div>
                </div>
                
                {/* TECHNICAL SKILLS  */}
                <div className="my-8 space-y-4">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">TECHNICAL SKILLS</h2>
                  <div className="indent-8 leading-loose">
                    <div>
                      <li> <span className="font-bold">DevOps & Cloud:</span> Azure DevOps · CI/CD Pipelines · GitHub Actions · Docker · Terraform · Azure · IaC</li>
                      <li> <span className="font-bold">Programming Languages:</span> Python · Javascript </li>
                      <li> <span className="font-bold">Frontend Development:</span> React.js, Next.js</li>
                      <li><span className="font-bold"> Backend Development: </span> Django · REST APIs</li>
                      <li><span className="font-bold">Mobile App Development:</span> React Native, Expo</li>
                      <li><span className="font-bold">Database Management:</span> PostgreSQL</li>
                      <li><span className="font-bold">Design: </span>Figma</li>
                    </div>
                  </div>
                </div>


                {/* SOCIAL MEDIA  */}
                <div className="my-8 space-y-4 leading-loose">
                  <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] inline-block">SOCIAL MEDIA</h2>
                  <div>
                    <div className="flex flex-col pl-4 gap-4">
                      <div className="flex items-center gap-2 ">
                        <p>LinkedIn</p>
                        <Link href="https://www.linkedin.com/in/bensonibeabuchi/" target="_blank">
                          <FaLinkedin className="h-8 w-6" />
                        </Link>

                      </div>
                      <div className="flex items-center gap-2">
                        <p>Github</p>
                        <Link href="https://github.com/bensonibeabuchi" target="_blank">
                          <FaGithub className="h-8 w-6" />
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
