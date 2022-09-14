import styles from "../styles/Projects.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { octokit } from "../utils/octokit";
import { Endpoints } from "@octokit/types";
import Button from "../components/Button";

type listUserReposResponse = Endpoints["GET /repos/{owner}/{repo}"]["response"];

const RepoCard = ({ repo }: { repo: listUserReposResponse["data"] }) => {
  return (
    <div className={styles.repoItem}>
      <div className={styles.repoTitle}>{repo.name}</div>
      <p>{repo.description}</p>
      <a href={repo.clone_url} className={styles.repoLink}>
        View Repository
        <div>&rarr;</div>
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

  return (
    <section className={styles.projects} id="Projects">
      <h2>Latest projects</h2>
      <div className={styles.reposGrid}>
        {repos &&
          repos.map((latestRepo) => (
            <RepoCard key={latestRepo.id} repo={latestRepo} />
          ))}
      </div>
      <a className={styles.buttonLink} href="https://github.com/valentinllpz" target="_blank">
        <Button text="Visit GitHub" type="button" />
      </a>
    </section>
  );
};

export default Projects;
