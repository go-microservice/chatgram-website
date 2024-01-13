

interface Props {
  tid: string,
}
const IndexBar = (props: Props) => {
  return (
    <div className="relative my-2 overflow-hidden bg-white dark:bg-gray-800 md:rounded-lg">
      {/* 顶部标签开始 eg: 最新，热门 */}
      <div className="flex h-12 shrink grow items-center justify-start space-x-1 py-2 px-4 md:space-x-2">
        <a className="flex h-8 items-center whitespace-nowrap rounded-lg pl-3 pr-3 text-sm font-bold hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700 text-blue-500" href="/?sort_by=last">
          最新
        </a>
        <a className="flex h-8 items-center whitespace-nowrap rounded-lg pl-3 pr-3 text-sm font-bold hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-200" href="/?sort_by=hot">
          热门
        </a>
        
        <div className="shrink grow"></div>
        <div className="md:hidden">
          <div>
            <a className="flex h-8 items-center rounded-lg bg-blue-500 px-3 text-xs text-white active:bg-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:active:bg-gray-900 sm:px-4">提交</a>
          </div>
        </div>
      </div>
      <div className="hidden">
        <div className="custom-scrollbar overflow-y-auto">
          <ul className="flex text-xs font-bold"></ul>
        </div>
      </div>
    </div>
  );
};

export default IndexBar;