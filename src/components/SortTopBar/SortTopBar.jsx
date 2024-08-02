import { radioGroupData } from './radioGroupData/radioGroupData';
import RadioGroupMenu from './RadioGroupMenu/RadioGroupMenu';
const SortTopBar = () => {
  return (
    <div className="min-h-8">
      <div className="mt-6 flex gap-2">
        {Object.keys(radioGroupData).map(groupKey => (
          // console.log(groupKey)
          <RadioGroupMenu
            key={groupKey}
            groupName={radioGroupData[groupKey].groupName}
            options={radioGroupData[groupKey].options}
          />
        ))}
      </div>
    </div>
  );
};

export default SortTopBar;
