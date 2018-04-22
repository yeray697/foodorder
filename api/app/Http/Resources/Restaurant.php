<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Restaurant extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->description,
            'telephone' => $this->telephone,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'photoUrl' => $this->photo_url,
            'menuUrl' => $this->menu_url,
            'isPrivate' => $this->is_private,
            'createdBy' => $this->created_by,
            'createdDate' => $this->created_at,
            'updatedDate' => $this->updated_at,
        ];
    }
}
