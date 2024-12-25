import {
    CalendarIcon,
    BriefcaseIcon,
    UserGroupIcon,
  } from '@heroicons/react/24/outline';
  
  const milestones = [
    {
      year: '2015',
      title: 'Founded',
      description: 'Launched as a two-person startup focusing on small-scale renovations.',
      Icon: CalendarIcon,
    },
    {
      year: '2018',
      title: 'Major Project',
      description: 'Completed a multi-family renovation that elevated our brand reputation.',
      Icon: BriefcaseIcon,
    },
    {
      year: '2021',
      title: 'Growth & Expansion',
      description: 'Welcomed new team members and expanded operations to multiple cities.',
      Icon: UserGroupIcon,
    },
  ];
  
  const Milestones = () => {
    return (
      <section className="py-12 px-4 md:px-8 lg:px-16 mb-12 lg:mb-28">
        <div className="max-w-6xl mx-auto">
          {/* Heading & Intro */}
          <h2>Our Journey</h2>
          <p className="max-w-xl mb-8">
            Take a walk down memory lane as we acknowledge how we got here.
          </p>
  
          {/* Vertical Timeline */}
          <div className="relative border-l-4 border-accent pl-24 space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative group pt-2">
                {/* Circular Icon Container */}
                <div className="absolute -left-16 top-4 flex items-center justify-center w-12 h-12 rounded-full bg-surface0 border-2 border-accent shadow-md group-hover:bg-accent transition-colors">
                  <milestone.Icon className="w-6 h-6 text-accent group-hover:text-surface0 transition-colors" />
                </div>
  
                {/* Content */}
                <h3 className="mb-1">{milestone.year}</h3>
                <h4 className="group-hover:text-accent transition duration-300">
                  {milestone.title}
                </h4>
                <p className="mt-1">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Milestones;
  