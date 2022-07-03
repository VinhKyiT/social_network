export const NameDefine = name => {
  if (name) {
    return name?.length > 1
      ? name?.shift()?.charAt(0) + name?.pop()?.charAt(0)
      : name[0]?.charAt(0) + name[0]?.charAt(name[0]?.length - 1);
  } else {
    return 'VK';
  }
};
