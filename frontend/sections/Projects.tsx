import styles from "../styles/Projects.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { octokit } from "../utils/octokit";
import { Endpoints } from "@octokit/types";

type listUserReposResponse = Endpoints["GET /repos/{owner}/{repo}"]["response"];

const RepoCard = ({repo}: {repo : listUserReposResponse["data"]}) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {repo.name}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">
        {repo.description}
      </p>
      <a
        href={repo.clone_url}
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  const [repos, setRepos] = useState<listUserReposResponse["data"][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (process.env.GHTOKEN) {
        const res = await octokit.request(
          "GET /users/valentinllpz/repos?sort=pushed"
        );
        let allRepos = res.data;
        let latestSix = allRepos.splice(0, 6);
        setRepos(latestSix);
      } else {
        const res = await axios.get(
          `https://api.github.com/search/repositories?q=user:valentinllpz+sort:updated`
        );
        let allRepos = res.data.items;
        let latestSix = allRepos.splice(0, 6);
        setRepos(latestSix);
      }
    };
    fetchData().catch(console.error);
  }, []);

  console.log(repos);

  return (
    <section className={styles.projects}>
      <h2 className={styles.h2}>Projects</h2>
		{repos &&
			repos.map((latestRepo) => (
				<RepoCard key={latestRepo.id} repo={latestRepo}/>
			))}
    </section>
  );
};

export default Projects;
