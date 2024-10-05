import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classroomSizes = [19, 20, 34];
  return classroomSizes.map((size) => new ClassRoom(size));
}
