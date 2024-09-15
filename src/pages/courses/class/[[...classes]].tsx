// import DetailClasses from "@/frontends/components/detailClasses";
// import useSWR from "swr";
// import { useRouter } from "next/router";
// import React from "react";
// import materialClass from '@/data/materiOfClass.json';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());


// const Dynamic = () => {
//   const { query } = useRouter();
//   const { data, error, isLoading } = useSWR("/api/class", fetcher);
//   console.log(error, isLoading);
//   const filter = data.data.classes.filter((items: any) => items.title == query.classes?.at(0));
//   return (
//     <div>
//       <DetailClasses
//         title={query.classes?.at(0)}
//         mentorixPoin={filter[0].mentorixPoin}
//         level={filter[0].difficultyLevel}
//         time={filter[0].time}
//         lesson={filter[0].lesson}
//         desc={filter[0].aboutClass}
//         stepClass={filter[0].StepClass}
//         prepareToLearn={filter[0].prepareToLearn}
//       />
//     </div>
//   );
// };

// export default Dynamic;

import React from 'react'

const Dynamic = () => {
  return (
    <div>Dynamic</div>
  )
}

export default Dynamic
