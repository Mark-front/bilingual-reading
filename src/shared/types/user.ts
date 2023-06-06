import { UserRole } from '@/shared/const/user';

export type TUserRole = (typeof UserRole)[keyof typeof UserRole];