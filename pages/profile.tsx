import useSWR from 'swr';
// https://swr.vercel.app/docs/getting-started
import axios from 'axios'
import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.scss';
import styles from '../components/layout.module.scss';

export default function Profile (): React.ReactElement {
  const fetcher = url => axios.get(url).then(res => res.data);
  const { data, error } = useSWR('https://reqres.in/api/users/2', fetcher);

  if (error) return <div>Failed to load user profile</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Image
        priority
        src={data.data.avatar}
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt="`${data.data.first_name} ${data.data.last_name}`"
      />
      <p>Hello {data.data.first_name} {data.data.last_name}!</p>
      <p>Email: {data.data.email}</p>
      <br />
      <p><a href={data.support.url}>{data.support.text}</a></p>
    </div>
  );
}
