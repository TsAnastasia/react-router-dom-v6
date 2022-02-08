import React, { FC, useState } from "react";

const BlogFilter: FC<{
  postQuery: string;
  latest: boolean;
  setSearchParams: Function;
}> = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;
    const params: { post?: string; latest?: boolean } = {};
    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={search}
        onChange={handleChange}
      />
      <label style={{ padding: "0 1rem" }}>
        <input
          type="checkbox"
          name="latest"
          checked={checked}
          onChange={handleToggle}
        />
        <span>New only</span>
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default BlogFilter;
