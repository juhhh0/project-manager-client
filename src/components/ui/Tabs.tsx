import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ProjectType } from "../../types/types";
import ProjectSettings from "../Project/ProjectSettings/ProjectSettings";
import ProjectContent from "../Project/ProjectContent";
import ProjectTasks from "../Project/ProjectTasks/ProjectTasks";

type Props = {
  content: string;
  project: ProjectType;
};

const Tabs: React.FC<Props> = ({ content, project }) => {
  return (
    <TabGroup>
      <TabList className="w-full flex justify-center gap-4">
        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
          Content
        </Tab>
        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
          Tasks
        </Tab>
        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
          Project Settings
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel className="mt-3">
          <ProjectContent content={content} project={project}/>
        </TabPanel>
        <TabPanel className="mt-3">
          <ProjectTasks project={project}/>
        </TabPanel>
        <TabPanel className="mt-3">
          <ProjectSettings project={project} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default Tabs;
