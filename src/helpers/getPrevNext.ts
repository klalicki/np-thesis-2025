import { getCollection } from "astro:content";

export const getPrevNext = async (slug: string) => {
  const allPeople = await getCollection("people");
  const entryID = allPeople.findIndex((item) => {
    return item.id === slug;
  });

  const prevEntryID = entryID == 0 ? allPeople.length - 1 : entryID - 1;
  const nextEntryID = entryID == allPeople.length - 1 ? 0 : entryID + 1;

  const nextEntry = allPeople[nextEntryID];
  const prevEntry = allPeople[prevEntryID];
  return { next: nextEntry, prev: prevEntry };
};
