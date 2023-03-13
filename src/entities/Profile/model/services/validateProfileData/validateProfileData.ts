import {IProfile} from '@/entities/Profile';
import {TValidateProfileError, ValidateProfileError} from '../../types/profile';

export const validateProfileData = (profile?: IProfile) => {
    const errors: TValidateProfileError[] = [];

    if (!profile) {
        return [ValidateProfileError.DATA_NOT_FOUND]
    }

    const {first, lastname, age, country} = profile;

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY)
    }

    return errors
}