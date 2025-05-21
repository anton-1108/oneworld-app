import { Briefcase, Globe, User } from "lucide-react";

export default function FeaturesSection() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div>
            <h2>Why Choose One World </h2>
            <p>
              Our program offers unique opportunities for personal and
              proffesional growth across America
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <Globe />
            </div>
            <h3>Diverse Opportunities</h3>
            <p>
              Work and travel in over 50 cities across the United States with
              our extensive network of partners
            </p>
          </div>
          <div>
            <div>
              <Briefcase />
            </div>
            <h3>Professional Development </h3>
            <p>
              Gain valuable work experience and skills that will enhance your
              resume.
            </p>
          </div>
          <div>
            <div>
              <User />
            </div>
            <h3>Cultural Exchange</h3>
            <p>
              Immerse yourself in America's diverse cultures and build lasting
              friendships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
