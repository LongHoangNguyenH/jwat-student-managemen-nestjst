import { IsString, MaxLength, IsOptional } from 'class-validator';

export class UpdateClassDto {
  @IsString()
  @IsOptional()
  @MaxLength(9)
  public className: string;
}
